import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useId, useState, useEffect } from "react";
import { existsMail, signup } from "../../services/auth.services";
import {
  EMAIL_REGEX,
  ONLY_LETTERS,
  PASSWORD_REGEX,
} from "../../utils/constants";
import Path from "../Path";
import logoImg from "../../assets/images/alares-logo.webp";
import foodImg from "../../assets/images/food-bg.webp";
import Modal from "../Modal";
import "../../styles/login/login.css";

function SignUp() {
  //hooks
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;
  const navigate = useNavigate();
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();
  const surnameId = useId();

  //states
  const [showModal, setShowModal] = useState({
    isSubmitted: false,
    isGood: false,
    msg: "",
  });

  useEffect(() => {
    document.title = "Alares | Sign Up ";
  }, []);

  //Functions
  function closeModal() {
    setShowModal({
      isSubmitted: false,
      isGood: false,
      msg: "",
    });
    showModal.isGood ? navigate("/login") : null;
  }

  async function onSubmit(data) {
    try {
      await existsMail(data.regEmail);
      const response = await signup(data);
      setShowModal({
        isSubmitted: true,
        isGood: true,
        msg: response.data.msg,
      });
      reset();
    } catch (error) {
      setShowModal({
        isSubmitted: true,
        isGood: false,
        msg: error.message,
      });
    }
  }

  return (
    <div className="login__container">
      <Path pathPrev={"Home"} pathActual={"Login"} goTo={"Home"}></Path>
      <div className="login__box-container">
        <div className="login__box">
          <img src={logoImg} alt="Alares Logo" className="login__logo" />
          <div className="login__square">
            <div className="login__titles">
              <p className="login__title">SIGNUP</p>
              <p className="login__title">LOGIN</p>
            </div>
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="login__wrapper">
                <div className="login__input-wrapper">
                  <label htmlFor={nameId}>Nombre</label>
                  <input
                    type="text"
                    id={nameId}
                    {...register("regName", {
                      pattern: ONLY_LETTERS,
                      required: true,
                      maxLength: 50,
                      minLength: 2,
                    })}
                    placeholder="nombre"
                  />
                </div>
                {errors.regName?.type === "required" && (
                  <p role="alert" className="form-error">
                    Nombre es requerido
                  </p>
                )}
                {errors.regName?.type === "pattern" && (
                  <p role="alert" className="form-error">
                    Solo deben incluir letras
                  </p>
                )}
              </div>
              <div className="login__wrapper">
                <div className="login__input-wrapper">
                  <label htmlFor={surnameId}>Apellido</label>
                  <input
                    type="text"
                    id={surnameId}
                    {...register("regSurname", {
                      pattern: ONLY_LETTERS,
                      required: true,
                      maxLength: 50,
                      minLength: 2,
                    })}
                    placeholder="apellido"
                  />
                </div>
                {errors.regSurname?.type === "required" && (
                  <p role="alert" className="form-error">
                    El apellido es requerido
                  </p>
                )}
                {errors.regSurname?.type === "pattern" && (
                  <p role="alert" className="form-error">
                    Solo deben incluir letras
                  </p>
                )}
              </div>
              <div className="login__wrapper">
                <div className="login__input-wrapper">
                  <label htmlFor={emailId}>Email</label>
                  <input
                    type="text"
                    id={emailId}
                    {...register("regEmail", {
                      pattern: EMAIL_REGEX,
                      required: true,
                      minLength: 8,
                    })}
                    placeholder="email"
                  />
                </div>
                {errors.regEmail?.type === "required" && (
                  <p role="alert" className="form-error">
                    El mail es requerido
                  </p>
                )}
                {errors.regEmail?.type === "minLength" && (
                  <p role="alert" className="form-error">
                    El mail debe ser mas largo
                  </p>
                )}
                {errors.regEmail?.type === "pattern" && (
                  <p role="alert" className="form-error">
                    Formato de mail incorrecto
                  </p>
                )}
              </div>
              <div className="login__wrapper ">
                <div className="login__input-wrapper">
                  <label htmlFor={passwordId}>Password</label>
                  <input
                    type="password"
                    id={passwordId}
                    {...register("regPassword", {
                      minLength: 8,
                      required: true,
                      pattern: PASSWORD_REGEX,
                    })}
                    placeholder="password"
                  />
                </div>
                {errors.regPassword?.type === "required" && (
                  <p role="alert" className="form-error">
                    La contraseña es requerida
                  </p>
                )}
                {errors.regPassword?.type === "pattern" && (
                  <p role="alert" className="form-error">
                    La contraseña debe contener al menos una letra mayúscula,
                    una letra minúscula, un número y un carácter especial{" "}
                  </p>
                )}
                {errors.regPassword?.type === "minLength" && (
                  <p role="alert" className="form-error">
                    La contraseña debe ser de al menos 8 caracteres{" "}
                  </p>
                )}
              </div>
              <div className="login__button">
                <button type="submit" className="button">
                  REGISTRARSE
                </button>
              </div>
            </form>
            <img
              src={foodImg}
              alt="Foto de comida"
              className="login__decoration"
            />
          </div>
        </div>
        <div className="login__msgs">
          <NavLink to="/login">
            <p className="login__msg">
              Ya tienes una cuenta? <span>Inicia Sesion</span>
            </p>
          </NavLink>
          <NavLink to="/forgot-password">
            <p className="login__msg">
              Olvidaste tu contraseña? <span>Reestablecer</span>
            </p>
          </NavLink>
        </div>
      </div>
      {showModal.isSubmitted && (
        <Modal
          isSubmitted={showModal.isSubmitted}
          isGoodStatus={showModal.isGood}
          msg={showModal.msg}
          handleSubmit={closeModal}
        ></Modal>
      )}
    </div>
  );
}

export default SignUp;
