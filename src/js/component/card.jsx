import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";


const Card = () => {
    return (
        <div class="m-4">
             <div class="card h-100">
                <img src={rigoImage} class="card-img-top object-fit-cover"/>
                <div class="card-body d-flex flex-column my-3">
                    <h5 class="card-title fs-4 mb-3">Card title</h5>
                    <p class="card-text flex-grow-1 mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis optio rerum!
                    </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">
                        Find Out More 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;