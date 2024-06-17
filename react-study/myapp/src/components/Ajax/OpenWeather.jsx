import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Alert, Image } from 'react-bootstrap'

export default function OpenWeather() {

    const [location, setLocation] = useState({lat:null, lon:null})

    const [timezone, setTimezone] = useState('');
    const [temp, setTemp] = useState('');
    const [desc, setDescription] = useState('')
    const [icon, setIcon] = useState('');

    const [error, setError] = useState(null);
    const [isReady, setReady] = useState(false);
    // useEffect 만의 콜백함수에는 async를 사용하지 못한다.
    // 따라서 콜백함수 안에서 함수를 새로 정의하고, 그 안에서 함수를 호출하자
    useEffect(() => {
        const fetchLocation= async () => (
            await getCurrentLocation()

        )
        fetchLocation(); // 함수 호충
        // getCurrentLocation();
    },[])

    // 현재 내가 있는 위치의 위도 , 경도 가져오기
    const getCurrentLocation = () => {
        // navigator 객체의 geolocation 속성을 이용해 사용자의 현재 위치 정보를
        // 가져오자
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
            return;
        }else {
            setError('Geolocation 이 지원되지 않는 브라우저 입니다.')
        }
    }
    // 현재 사용자 위치정보가 position으로 들어온다
    const showPosition=(position)=>{
        console.log(position)
        setLocation({lat:position.coords.latitude, lon:position.coords.longitude})
        setError(null);
    }
    const showError = (error) => {
        setError('Geolocation 이 지원되지 않는 브라우저 입니다.')
    }
    useEffect(() => {
        if(location && location.lat && location.lon) {
            getweather();
            }
    },[location])

    const getweather = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=ac8c6dcb13dbbf70179b8cb69254643f&mode=json&lang=kr`;
        console.log(url);
        axios.get(url)
        .then((response)=>{
            // alert(JSON.stringify(response))
            // const {timezone} = response.data;
            // const {temp} = response.data.current; // 절대온도(kelvin)
            // const {description, icon} = response.data.current.weather[0];

            // let c = temp-273.15;
            // setTimezone(timezone);
            // setTemp(c);
            // setDescription(description);
            // setIcon(icon);
            // setReady(true);
            const { timezone, main: { temp }, weather } = response.data
            const { description, icon } = weather[0]
            const celsiusTemp = temp - 273.15
            setTimezone(timezone)
            setTemp(celsiusTemp.toFixed(0))
            setDescription(description)
            setIcon(icon)
            setReady(true)
        })
        .catch(error => {
            alert(error.message)
        })
    }

    const {lat, lon} = location;
    let iconurl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <Container className='py-5'>
            <h1>오늘 날씨</h1>
            <br />
            <h2>현재 나의 위치</h2>
            <Alert variant='primary'>
                <h3>Lattitude: {lat} </h3>
                <h3>Longitude: {lon} </h3>
            </Alert>
            {isReady&&
            <Alert variant='warning'>
                <h3>Timezone: {timezone}</h3>
                <h3>Temperature: {temp}도</h3>
                <h3>Description: {desc}</h3>
                <Image src={iconurl} />
            </Alert>
            }
            {error&&
                <Alert variant='danger'>
                    <h4>Error: {error}</h4>
                </Alert>
            }
        </Container>
    )
}
