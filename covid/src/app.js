import React from 'react'

import { Cards } from './components';
import styles from './App.module.css';
import { fetchData } from './api'
import coronaImg from './img/logo.png';
import Footer from './components/Footer';



class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }
    
    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="COVID-19" />
                <Cards data={data} />
                <Footer />
         </div>
        )
    }
}

export default App;