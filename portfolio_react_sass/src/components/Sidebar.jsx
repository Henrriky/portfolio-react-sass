// Componentes
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

// Estilos
import '../styles/components/sidebar.sass';

import Avatar from '../img/profile.jfif';

function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Henrriky Jhonny"/>
            <p className="title">Programador Full-Stack</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="https://drive.google.com/file/d/1OV134MEgbWypXshuosUNAZeYa2YkOlQk/view?usp=share_link" target="_blank" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar