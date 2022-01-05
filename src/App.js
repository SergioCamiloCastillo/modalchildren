import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import GalleryModal from './components/GalleryModal';

function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] =
    useModal(false);

  return (
    <div className="App">
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Open Gallery Modal</button>
      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="Login"
      >
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Correo " />
          <input type="password" placeholder="Contraseña " />
        </form>
      </Modal>
      <Modal
        isOpen={isOpenChatModal}
        closeModal={closeChatModal}
        title="Chat Modal"
      >
        <p>
          Hola esto en un chat <b>Angelica</b>
        </p>
        <p>
          ¿Que hace? <b>Sergio</b>
        </p>
      </Modal>
      <GalleryModal
        isOpen={isOpenGalleryModal}
        closeModal={closeGalleryModal}
      />
    </div>
  );
}

export default App;
