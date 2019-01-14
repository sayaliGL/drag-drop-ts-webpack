import * as React from 'react';
import './Main.css';
import { any } from 'prop-types';



export class DropPanel extends React.Component<{listProps:any}> {
    constructor(props:any){
        super(props);
        }

    allowDrop = (event:any)=> {
        event.preventDefault();
    }
    onDragEnter= (event:any)=> {
        if (event.target.className == "box-border") {
            event.target.style.background = "antiquewhite";
        }

    }
    onDragLeave= (event:any)=> {
        if (event.target.className == "box-border") {
            event.target.style.background = "";
        }
    }
    drop= (event:any ) => {
        event.preventDefault();
        event.target.style.background = "";
        let data = event.dataTransfer.getData("Text");
        let listItem=event.target.appendChild(document.getElementById(data));
        let closeButton =document.getElementById(listItem.firstElementChild.id);
        closeButton.style.display = "block";
        let elem = document.getElementById(listItem.id);
        elem.setAttribute('draggable', 'false');
        elem.style.border = "none";
        elem.addEventListener("click", this.removeDropItem);
    }
      removeDropItem(event:any) {
            let removeButton = document.getElementById(event.target.id);
            removeButton.style.display = "none";
            let element = document.getElementById(`id_${event.target.value}`);
            let remove_element =  element.parentNode.removeChild(element);
            let list = document.getElementById("list");
            list.appendChild(remove_element);
            element.setAttribute('draggable', 'true');
            element.style.border = "1px solid gray";

        }


    render() {

        return (<div className=" rightPanel" >
            <div id="drop_box">
                {(this.props.listProps || []).map((listItem:any, index:any) =>

                   <div className='box-border' key={index} id={`dropable_${listItem.id}`} onDragEnter={(event: any) => this.onDragEnter(event)} onDragLeave={(event: any) => this.onDragLeave(event)} onDrop={(event) =>this.drop(event)} onDragOver={(event:any) => this.allowDrop(event)}></div>

                )}
            </div>
        </div>
        );
    }
}