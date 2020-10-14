import React from "react"

class MainContent extends React.Component {
    render (){
        return (
            // <div className="productcard">
            //     <img src={props.item.imgUrl} alt="product" width="200"/>
            //     <h2>{props.item.name}</h2>
            //     <p>${props.item.price}</p>
            // </div>
    
                <div className="col-sm-4">
                    <div></div>
                  <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={this.props.item.imgUrl} data-holder-rendered="true" width="200" alt="product"></img>
                    <div className="card-body">
                      <p className="card-text">{this.props.item.name}</p>
                        <p>${this.props.item.price}</p>
                    </div>
                  </div>
                </div>
    
            )
    }

}

export default MainContent

