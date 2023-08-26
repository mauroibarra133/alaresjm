/* eslint-disable react-hooks/exhaustive-deps */
import { getProducts, deleteProduct } from '../../services/productos.services';
import { getCategories } from '../../services/categorias.services';
import { useEffect,useState } from 'react'
import VerCartaVacio from '../FormVacio'
import searchImg from '../../assets/images/magnifying-glass-solid.svg'
import Overlay from '../Overlay'
import Item from './Item';
import pencilImg from '../../assets/images/pencil-solid.svg'
import cruzImg from '../../assets/images/xmark-solid.svg'
import '../../styles/dashboard/veritems.css'
import { useAuth } from '../../hooks/useAuth';

function VerCarta() {
    //States 
    const [items,setItems] = useState([]);
    const [action,setAction] = useState('');
    const [itemStatus,setItemStatus] = useState(
        {msg: '',
    status: false}
    );
    const [filteredItems,setFilteredItems] = useState([]);
    const [tags,setTags] = useState([]);
    const [categories,setCategories] = useState([]);
    const [page,setPage] = useState(1);
    const [offsett,setOffset] = useState(0);
    const [pages,setPages] = useState([]);
    const [activeTag, setActiveTag] = useState(null);
    const [search, setSearch] = useState(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 425);  
    const [modalCarta, setModalCarta] = useState({
        isSubmitted: false,
        item: {}
    });  

    //Constants
    const LIMIT = 10;

    //Hooks
    const {auth} = useAuth()

    //UseEffects
    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 425);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(() => { 
        async function getItems(){
            try {
                const response = await getProducts()
                setItems(response)
            } catch (error) {
                console.log(error);
            }


        }
        async function getTags(){
            try {
                const response = await getCategories()
                setTags(response)
            } catch (error) {
                console.log(error);
            }


        }
        async function searchCategories(){
            try {
                const response = await getCategories()
                setCategories(response)
            } catch (error) {
                console.log(error);
            }

        }
        getItems()
        getTags()
        searchCategories()
      }, []);

    useEffect(()=>{
        const arrPaginas = [];
        for (let i = 1; i <= Math.ceil(filterProducts(items).length / LIMIT); i++) {
            arrPaginas.push(i);
        }
        setPages(arrPaginas);
    },[items,activeTag,search]);


    //Functions
    async function getItems(){
        const response = await getProducts()
        setItems(response)
        setFilteredItems(response)

    }
    async function deleteProductByID(id){
        if(auth.data.rol !== "Guest"){
            const response = await deleteProduct(id)
            console.log(response);
            setItems(items.filter(item => item.id != id))
            handleMsgStatus(response,'Eliminado correctamente','Hubo un error al eliminar tu producto')
        }
    }

    function handleMsgStatus(response,msgGood,msgBad){
        if(response.status >= 200 && response.status < 300){
            getItems()
            setItemStatus({msg: msgGood, status: true})
            document.querySelector('.vercarta-item-status').classList.add('good')
        }else{
            setItemStatus({msg: msgBad, status: false})
            document.querySelector('.vercarta-item-status').classList.add('bad')
        }
        setTimeout(() => {
            setItemStatus({
                msg: '',
                status: false
            })
            document.querySelector('.vercarta-item-status').classList.remove('good')
        }, 2000);
    }
    function openModalCarta(item,action){
        setModalCarta({
            isSubmitted:true,
            item: item
        });
        setAction(action)
        document.body.classList.add('disable-scroll');
    }
    function closeModalCarta(){
        setModalCarta({
            isSubmitted:false,
            item: {}
        });
        document.body.classList.remove('disable-scroll');    
    }

    function handlePage(pageAct){
        if(pageAct !== page){
            window.scrollTo(0, 300);
            setPage(pageAct);
            setOffset((pageAct-1) * LIMIT)
        }

    }
    function handleTag(tag){
        if(activeTag == tag.id){
            handlePage(1)
            setActiveTag(null)
        return
        }
        setActiveTag(tag.id)
        handlePage(1)
    }
    function filterProducts(items){
        //Filtrar por tag y buscador
        if(search && activeTag){
            const itemsBuscados = items.filter(item => item.id_categoria == activeTag).filter(item=> item.nombre.toLowerCase().includes(search.toLowerCase()));
            setFilteredItems(itemsBuscados)
            return itemsBuscados
        }
        //Filtrar por buscador
        if(search){
            const itemsBuscados = items.filter(item=> item.nombre.toLowerCase().includes(search.toLowerCase()));
            setFilteredItems(itemsBuscados)
            return itemsBuscados
        }
        //Filtrar por tag
        if(activeTag != null){
            const filtered = items.filter(item => item.id_categoria == activeTag).sort((a, b) => a.nombre.localeCompare(b.nombre))
            setFilteredItems(filtered)
            return filtered
        }

            setFilteredItems(items)
            return items.sort((a, b) => a.nombre.localeCompare(b.nombre));

    } 
   return ( 
        <div className="vercarta">
            <div className="vercarta__search-wrapper">
                <div className="vercarta__search">
                    <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
                    <img src={searchImg} alt="Buscador" className='dashboard-icon'/>
                </div>
                <button className='button vercarta__search-button' onClick={()=>openModalCarta({},'A')}>Agregar</button>
            </div>
            <div className="vercarta__filters">
                {tags.length > 0  && tags.map(tag => (
                    <div className={`vercarta__filter ${activeTag == tag.id ? 'active' : ''}`} key={tag.id} onClick={(()=>handleTag(tag))}>{tag.nombre}</div>
                ))}
            </div>
            <p className={`vercarta-item-status ${itemStatus.status ? 'good' : 'bad'}`}>{itemStatus.msg}</p>
        <div className="vercarta__carta veritems__lista">
            <div className="vercarta__header veritems__header" style={{ gridTemplateColumns: `repeat(${7},1fr)`}}>
                <div className="veritems__header-column  vercarta__header-column"><p>{isLargeScreen ? 'POSICION' : 'POS.'}</p></div>
                    <div className="veritems__header-column  vercarta__header-column"><p>NOMBRE</p></div>
                    <div className="veritems__header-column  vercarta__header-column"><p>ACCIONES</p></div>
            </div>
            <div className="vercarta__body veritems__body">
                {filteredItems.length <= 0 ? <VerCartaVacio msg={'No hay items'} msgButton={':('}></VerCartaVacio> : 
                filteredItems.slice(offsett,LIMIT+offsett).map((item,i) =>(
                    <div className="veritems__row vercarta__row"  style={{gridTemplateColumns: `repeat(7 ,1fr)`}} key={item.id} >
                        <div className="veritems__dato vercarta__dato"><p>{offsett == 0 ? (i+1) : i+1+offsett}</p></div>
                        <div className="veritems__dato vercarta__dato vercarta__dato-nombre"><p>{(item.nombre).toUpperCase()}</p></div>
                        <div className="veritems__dato vercarta__dato">
                            <button  ><img src={pencilImg} alt="Modificar item" className='dashboard-icon vercarta__acciones' onClick={()=>openModalCarta(item, 'U')}/></button>
                            <button disabled={auth.data.rol == "Guest" ? true : false}  onClick={()=>deleteProductByID(item.id)} ><img src={cruzImg} alt="Eliminar item" className='dashboard-icon vercarta__acciones'/></button>
                        </div>  
            
                </div>
                ))
            }
            </div>
        </div>
        <div className="vercarta__paginacion-wrapper">
            <div className="vercarta__paginacion">
                <div className="vercarta__pagina--button">
                    <p onClick={()=> handlePage((page - 1) == 0 ? page : page-1) }>Previo</p>
                </div>
                {filteredItems && pages.map(pageAct => (
                    <div className={`vercarta__pagina`} key={pageAct} onClick={()=>handlePage(pageAct)}>
                        <p className={`${pageAct == page ? 'active' : ''}`}>{pageAct}</p>
                    </div>
                ))}
                <div className="vercarta__pagina--button">
                    <p onClick={()=> handlePage((page + 1) > pages.length ? page : page+1)}>Siguiente</p>
                </div>
            </div>
        </div>
        {modalCarta.isSubmitted && (
                <Overlay comp={'verpedidos'}>
                        <Item modalCarta={modalCarta} closeModal={closeModalCarta} categorias={categories}  action={action} handleMsgStatus={handleMsgStatus}></Item>
                </Overlay>
                    )}
    </div>
    )
} 
export default VerCarta;