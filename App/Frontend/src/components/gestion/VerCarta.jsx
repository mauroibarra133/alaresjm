/* eslint-disable react-hooks/exhaustive-deps */
import searchImg from '../../assets/images/magnifying-glass-solid.svg'
import '../../styles/dashboard/veritems.css'
import { getProducts } from '../../services/productos.services';
import { getCategories } from '../../services/categorias.services';
import { useEffect,useState } from 'react'
import VerCartaVacio from '../FormVacio'
import Overlay from '../Overlay'
import Item from './Item';
import pencilImg from '../../assets/images/pencil-solid.svg'
import cruzImg from '../../assets/images/xmark-solid.svg'
function VerCarta() {
    const [items,setItems] = useState([]);
    const [filteredItems,setFilteredItems] = useState([]);
    const [tags,setTags] = useState([]);
    const [categorias,setCategorias] = useState([]);
    const [pagina,setPagina] = useState(1);
    const [offsett,setOffset] = useState(0);
    const [paginas,setPaginas] = useState([]);
    const [activeTag, setActiveTag] = useState(null);
    const [busqueda, setBusqueda] = useState(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 425);  
    const LIMIT = 10;
    const [modalCarta, setModalCarta] = useState({
        isSubmitted: false,
        item: {}
    });  

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
            const response = await getProducts()
            setItems(response)
            setFilteredItems(response)

        }
        async function getTags(){
            const response = await getCategories()
            setTags(response)

        }
        async function searchCategories(){
            const response = await getCategories()
            setCategorias(response)
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
    setPaginas(arrPaginas);
    
},[items,activeTag,busqueda]);

function openModalCarta(item){
    setModalCarta({
        isSubmitted:true,
        item: item
    });
    document.body.classList.add('disable-scroll');
}
function closeModalCarta(){
    setModalCarta({
        isSubmitted:false,
        item: {}
    });
    document.body.classList.remove('disable-scroll');    
}

function handlePage(page){
    if(page !== pagina){
        window.scrollTo(0, 300);
        setPagina(page);
        setOffset((page-1) * LIMIT)
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
    if(busqueda && activeTag){
        const itemsBuscados = items.filter(item => item.id_categoria == activeTag).filter(item=> item.nombre.toLowerCase().includes(busqueda.toLowerCase()));
        setFilteredItems(itemsBuscados)
        return itemsBuscados
    }
    //Filtrar por buscador
    if(busqueda){
        const itemsBuscados = items.filter(item=> item.nombre.toLowerCase().includes(busqueda.toLowerCase()));
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
                    <input type="text" onChange={(e)=> setBusqueda(e.target.value)}/>
                    <img src={searchImg} alt="Buscador" className='dashboard-icon'/>
                </div>
                <button className='button vercarta__search-button'>Agregar</button>
            </div>
            <div className="vercarta__filters">
                {tags.length > 0  && tags.map(tag => (
                    <div className={`vercarta__filter ${activeTag == tag.id ? 'active' : ''}`} key={tag.id} onClick={(()=>handleTag(tag))}>{tag.nombre}</div>
                ))}
            </div>
        <div className="vercarta__carta veritems__lista">
            <div className="vercarta__header veritems__header" style={{ gridTemplateColumns: `repeat(${7},1fr)`}}>
                <div className="veritems__header-column  vercarta__header-column"><p>{isLargeScreen ? 'POSICION' : 'POS.'}</p></div>
                    <div className="veritems__header-column  vercarta__header-column"><p>NOMBRE</p></div>
                    <div className="veritems__header-column  vercarta__header-column"><p>ACCIONES</p></div>
            </div>
            <div className="vercarta__body veritems__body">
                {filteredItems.length <= 0 ? <VerCartaVacio msg={'No hay items'} msgButton={':('}></VerCartaVacio> : 
                filteredItems.slice(offsett,LIMIT+offsett).map((item,i) =>(
                    <div className="veritems__row vercarta__row"  style={{gridTemplateColumns: `repeat(7 ,1fr)`}} key={item.id} onClick={()=>openModalCarta(item)}>
                        <div className="veritems__dato vercarta__dato"><p>{offsett == 0 ? (i+1) : i+1+offsett}</p></div>
                        <div className="veritems__dato vercarta__dato vercarta__dato-nombre"><p>{(item.nombre).toUpperCase()}</p></div>
                        <div className="veritems__dato vercarta__dato">
                            <img src={pencilImg} alt="Modificar item" className='dashboard-icon vercarta__acciones'/>
                            <img src={cruzImg} alt="Eliminar item" className='dashboard-icon vercarta__acciones'/>
                        </div>  
            
                </div>
                ))
            }
            </div>
        </div>
        <div className="vercarta__paginacion-wrapper">
            <div className="vercarta__paginacion">
                <div className="vercarta__pagina--button">
                    <p onClick={()=> handlePage((pagina - 1) == 0 ? pagina : pagina-1) }>Previo</p>
                </div>
                {filteredItems && paginas.map(page => (
                    <div className={`vercarta__pagina`} key={page} onClick={()=>handlePage(page)}>
                        <p className={`${pagina == page ? 'active' : ''}`}>{page}</p>
                    </div>
                ))}
                <div className="vercarta__pagina--button">
                    <p onClick={()=> handlePage((pagina + 1) > paginas.length ? pagina : pagina+1)}>Siguiente</p>
                </div>
            </div>
        </div>
        {modalCarta.isSubmitted && (
                <Overlay comp={'verpedidos'}>
                        <Item modalCarta={modalCarta} closeModal={closeModalCarta} categorias={categorias}></Item>
                </Overlay>
                    )}
    </div>
    )
} 
export default VerCarta;