import React, { useState } from "react";
import NavBar from "../../components/NavBarBlack/NavBarEs";
import styles from "../../components/SwiperPrueba/Banner.module.css"; // Ajusta la ruta si cambia
import axios from "axios";
import Link from "next/link";
import { Button } from "antd";

function Lalloronacantina() {
  // URL de tu backend
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const head = [
    {
      title: "Destaca en Internet | Impulso Restaurantero",
      content: "Impulsa tu restaurante en línea con tecnología avanzada",
      description:
        "Te ayudamos a destacar en internet con páginas optimizadas, técnicas avanzadas de SEO y estrategias digitales efectivas.",
      url: "https://www.impulsorestaurantero.com/",
      image:
        "https://imagenesrutalab.s3.us-east-1.amazonaws.com/growthsuite/CASOSEXITOSOS/itam-logo.png",
    },
  ];

  const info = [
    {
      titulo1:
        "ITAM: Elevando la Seguridad Web y la Confiabilidad de Sus Plataformas",
      parrafo1:
        "Trabajamos en una transformación integral del ecosistema de sitios web del ITAM, reforzando su seguridad, escalabilidad y experiencia de usuario. Este proyecto cumplió con estrictos estándares de protección y se convirtió en un referente de buenas prácticas para instituciones académicas en Latinoamérica.",
      imagen1:
        "https://imagenesrutalab.s3.us-east-1.amazonaws.com/growthsuite/CASOSEXITOSOS/itam-logo.png",
      titulo2:
        "Construyendo un Sistema de Infraestructura Resistente y Confiable",
      parrafo2:
        "Diseñamos y desplegamos un entorno web con servidores redundantes, monitoreo permanente y sistemas de respaldo automatizados. Con ello, aseguramos disponibilidad continua y mitigamos riesgos de pérdida de información.",
      imagen2:
        "https://imagenesrutalab.s3.us-east-1.amazonaws.com/growthsuite/casosExitopage/itamlogochecar.png",
      titulorazones:
        "3 PUNTOS CLAVE EN LA IMPLEMENTACIÓN EXITOSA DE SEGURIDAD WEB PARA EL ITAM",
      razon1: "Análisis de Vulnerabilidades",
      parraforazon1:
        "Realizamos un diagnóstico completo para identificar posibles puntos de ataque en el ecosistema web. Aplicamos parches de seguridad y configuraciones personalizadas para blindar los sitios frente a amenazas externas.",
      razon2: "Cumplimiento de Normativas Internacionales",
      parraforazon2:
        "Aseguramos que cada proceso cumpliera con normativas de protección de datos y políticas de IT internas, alineándonos con los más altos estándares de seguridad global.",
      razon3: "Optimización de Rendimiento",
      parraforazon3:
        "Integramos servicios de caching y balanceadores de carga para mejorar la velocidad y la experiencia del usuario, asegurando que cada sitio respondiera de forma ágil aun en picos de tráfico.",
      titulo3: "Preparados para el Futuro Educativo Digital",
      parrafo3:
        "La nueva infraestructura del ITAM no solo es segura y estable, sino que también sienta las bases para la próxima generación de herramientas de aprendizaje y colaboración digital.",
      imagen3:
        "https://imagenesrutalab.s3.us-east-1.amazonaws.com/growthsuite/casosExitopage/itam-university.png",
      titulo4:
        "¿Sabías que tu institución puede triplicar su efectividad y seguridad en línea con las estrategias adecuadas? Descubre cómo el ITAM logró una transformación digital de alto nivel.",
    },
  ];

  // ESTADOS y LÓGICA DEL MODAL FORM
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Abrir/cerrar modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Validaciones
  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const whatsappRegex = /^[0-9]{10}$/;
    const fieldErrors = {};

    if (!data.first_name) {
      fieldErrors.first_name = "Por favor, ingresa tu nombre.";
    }
    if (!data.last_name) {
      fieldErrors.last_name = "Por favor, ingresa tu apellido.";
    }
    if (!data.email || !emailRegex.test(data.email)) {
      fieldErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }
    if (!data.whatsapp || !whatsappRegex.test(data.whatsapp)) {
      fieldErrors.whatsapp =
        "Por favor, ingresa un número de WhatsApp válido (10 dígitos).";
    }
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  // Submit del formulario
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage("");
    setAlertType("");
    setErrors({});

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!validateForm(data)) {
      setAlertMessage("Por favor, corrige los errores en el formulario.");
      setAlertType("error");
      return;
    }

    try {
      setLoading(true);
      // Ajusta la URL según tu backend
      const response = await axios.post(`${apiUrl}/prospectsmeeting`, data);

      if (response.status === 200) {
        alert("¡Email enviado!");
        e.target.reset();
        toggleModal();
      } else {
        alert("¡Email enviado!");
        e.target.reset();
        toggleModal();
      }
    } catch (error) {
      console.error(
        "Error al enviar el formulario:",
        error.response?.data || error.message
      );
      setAlertMessage(
        "Hubo un error al enviar tu información. Por favor, intenta de nuevo."
      );
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-gray-50 flex flex-col items-center px-4 py-8 md:px-16 pt-36 md:pt-36">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {info[0].titulo1}
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl">
            {info[0].parrafo1}
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 justify-start p-2 bg-[#fbfbfad9] border-[#e5e5e5] max-w-2xl">
          <img
            className="w-1/2 object-contain rounded-[1.2em]"
            src={info[0].imagen1}
            alt=""
          />
        </div>
        <div className="mt-6 mb-4">
          {/* Botón que ABRE el nuevo modal de Demo Gratis */}
          <div className="flex justify-center">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="
                mt-2 !text-[#007bff]
                !bg-[#FFD700]
                
                !border-none
                !rounded-[14px]
                !px-[1.8em]
                !py-[1.6em]
                !text-[1.42em]
                !leading-[1.2em]
                !font-bold
                tracking-[0.025em]
                transition-shadow
                duration-300
                shadow-[0_7px_80px_-12px_rgba(0,0,0,1)]
                hover:shadow-[0_7px_80px_-12px_rgba(0,0,0,0.7)]
              "
            >
              <a
                href="https://wa.me/5215531491808?text=Hola%20quiero%20un%20software%20exitoso%20con%20growthsuite"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline !text-[#007bff]"
              >
                SOLICITA TU DEMO <br /> DE SOFTWARE GRATIS
              </a>
            </Button>
          </div>
        </div>
        <div className="content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-36 px-[20px] items-center">
          <div className="flex flex-col items-center text-center max-w-2xl mt-2">
            <h2 className="md:text-5xl font-bold text-gray-900 mb-2 leading-tight text-2xl">
              {info[0].titulo2}
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl">
              {info[0].parrafo2}
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-4 justify-start p-2 bg-[#fbfbfad9] border-[#e5e5e5] max-w-xl">
            <img
              className="w-full object-contain rounded-[1.2em]"
              src={info[0].imagen2}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-6 px-2">
          <div className="heading-block flex flex-col justify-center items-center mb-16">
            <h2 className="title2-tw text-center uppercase">
              {info[0].titulorazones}
            </h2>
          </div>
          <div className="max-w-[1050px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                <span className="inline-block p-4 rounded text-white bg-primary">
                  1
                </span>
                <h5 className="text-[16px] md:text-[18px] font-bold">
                  {info[0].razon1}
                </h5>
                <p className="parrafo-tw paragraph-feature">
                  {info[0].parraforazon1}
                </p>
              </div>
              <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                <span className="inline-block p-4 rounded text-white bg-primary">
                  2
                </span>
                <h1 className="text-[16px] md:text-[18px] font-bold">
                  {info[0].razon2}
                </h1>
                <p className="parrafo-tw paragraph-feature">
                  {info[0].parraforazon2}
                </p>
              </div>
              <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                <span className="inline-block p-4 rounded text-white bg-primary">
                  3
                </span>
                <h1 className="text-[16px] md:text-[18px] font-bold">
                  {info[0].razon3}
                </h1>
                <p className="parrafo-tw paragraph-feature">
                  {info[0].parraforazon3}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-36 px-[20px] items-center">
          <div className="w-full flex flex-col items-center gap-4 justify-start p-2 bg-[#fbfbfad9] border-[#e5e5e5] max-w-xl">
            <img
              className="w-full object-contain rounded-[1.2em]"
              src={info[0].imagen3}
              alt=""
            />
          </div>
          <div className="w-full flex flex-col items-center gap-4 justify-center p-2 bg-[#fbfbfad9] border-[#e5e5e5] rounded-[1.2em] max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight text-center">
              {info[0].titulo3}
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl text-center">
              {info[0].parrafo3}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center py-2 md:px-16 pt-6 md:pt-12">
          <div className="text-center max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight text-center">
              {info[0].titulo4}
            </h1>
          </div>
          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden h-64 md:h-96">
            {/* Imagen de fondo */}
            <img
              src="https://imagenesrutalab.s3.us-east-1.amazonaws.com/growthsuite/CASOSEXITOSOS/itam-logo.png"
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            {/* Gradiente superpuesto */}
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-75 bg-black"></div>
            {/* Contenido */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full text-white">
              <div>
                <div className="mb-8 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">
                    Gratis
                  </p>
                  <p className="text-lg text-gray-300">Sin compromisos</p>
                </div>
                <div className="text-center"></div>
              </div>
              {/* Botón que ABRE el modal “Demo Gratis” */}
              <div className="mt-6 mb-4">
                {/* Botón que ABRE el nuevo modal de Demo Gratis */}
                <div className="flex justify-center">
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="
                      mt-2 !text-[#007bff]
                      !bg-[#FFD700]
                      
                      !border-none
                      !rounded-[14px]
                      !px-[1.8em]
                      !py-[1.6em]
                      !text-[1.42em]
                      !leading-[1.2em]
                      !font-bold
                      tracking-[0.025em]
                      transition-shadow
                      duration-300
                      shadow-[0_7px_80px_-12px_rgba(0,0,0,1)]
                      hover:shadow-[0_7px_80px_-12px_rgba(0,0,0,0.7)]
                    "
                  >
                    <a
                      href="https://wa.me/5215531491808?text=Hola%20quiero%20un%20software%20exitoso%20con%20growthsuite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline !text-[#007bff]"
                    >
                      SOLICITA TU DEMO <br /> DE SOFTWARE GRATIS
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Demo Gratis */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Obtén Tu Demo Gratis Ahora</h2>
              <button className={styles.closeModal} onClick={toggleModal}>
                &times;
              </button>
            </div>
            <div className={styles.modalBody}>
              {alertMessage && (
                <div
                  className={`${styles.alert} ${
                    alertType === "error"
                      ? styles.alertError
                      : styles.alertSuccess
                  }`}
                >
                  {alertMessage}
                </div>
              )}
              {loading ? (
                <div className="flex flex-col items-center justify-center space-y-4 my-4">
                  <div className="animate-spin w-16 h-16 border-4 border-[#FFD700] border-t-transparent rounded-full"></div>
                  <p className="text-xl font-semibold text-yellow-300">
                    Enviando información, por favor espera...
                  </p>
                </div>
              ) : (
                <form id="customForm" onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="first_name"></label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Nombre(s) completo"
                      className={styles.hsInput}
                    />
                    {errors.first_name && (
                      <span className={styles.errorText}>
                        {errors.first_name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="last_name"></label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Apellido(s) completo"
                      className={styles.hsInput}
                    />
                    {errors.last_name && (
                      <span className={styles.errorText}>
                        {errors.last_name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Correo electrónico"
                      className={styles.hsInput}
                    />
                    {errors.email && (
                      <span className={styles.errorText}>{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="whatsapp"></label>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      placeholder="Número de WhatsApp (10 dígitos)"
                      className={styles.hsInput}
                    />
                    {errors.whatsapp && (
                      <span className={styles.errorText}>
                        {errors.whatsapp}
                      </span>
                    )}
                    {/* Campos ocultos */}
                    <input
                      type="hidden"
                      name="origin"
                      value="LalloronaDemoGratis"
                    />
                    <input type="hidden" name="status" value="creado" />
                  </div>
                  <div>
                    <button type="submit" className={styles.hsSubmit}>
                      Sí, quiero mi demo gratis
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Lalloronacantina;
