import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='my-3'>
                <div className="card" >
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zIndex: '1' }}>  {source} </span>
                    <img className="card-img-top" src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2023/04/Deal-770x433.png" : imageUrl} alt="/" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}   
