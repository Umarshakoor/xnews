import React, { Component } from 'react'
import Loading from '../Assets/Loading.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Loading} height={100} alt="loading" />
            </div>
        )
    }
}
