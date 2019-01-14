import * as React from 'react';
import './Main.css';
import { any } from 'prop-types';


export class List extends React.Component<{listProps:any}> {
constructor(props:any){
super(props);
}
   

   onDragEnter(event: any) {
      if (event.target.className == "box-border") {
         event.target.style.background = "antiquewhite";
      }

   }

   onDragLeave(event: any) {
      if (event.target.className == "box-border") {
         event.target.style.background = "";
      }
   }
   drag(ev: any) {
      ev.dataTransfer.setData("text", ev.target.id);
   }

   render() {
     
      return (<div className="side-scroll leftPanel" >
         <div id="list">
         
            {(this.props.listProps || []).map((listItem:any, index:any) =>

               <div className='list-item' draggable={true} onDragStart={(event) => this.drag(event)} key={index} id={`id_${listItem.id}`}>{listItem.first_name}
                <button type='button'  className='close' value={listItem.id} id={`button_${listItem.id}`}>X</button>
               </div>
            )}
            </div>
    </div > 
    );
   }
}