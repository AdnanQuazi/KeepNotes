const btn = document.querySelector("#arr1");
const headr = document.querySelector('.header');
const nt = document.getElementsByClassName('notecontainer');

const updateLSData = () =>{

     const textData = document.querySelectorAll('textarea');
     const noteData = [];
     textData.forEach((note)=> {
        return noteData.push(note.value);
   })
   console.log(noteData);
   localStorage.setItem('notes', JSON.stringify(noteData));
} 

const notemaker = (text = '') => {

      const note = document.createElement("div");
      note.classList.add("note");
      
   
          const htmlData = `
          
          <div class="operate">
          <button class="edit"><i class="fas fa-edit fa-2x" ></i>
          </button>
      <button class="delete"><i class="fas fa-trash-alt fa-2x" id="delete"></i></button>
       </div>
       <div class="main ${text ? "" : "hidden"}"> </div>
       <textarea class="${text ? "hidden" : " "}" cols="30" rows="5" spellcheck="false"></textarea>
          `;

          note.insertAdjacentHTML('beforeend',htmlData);
          const textarea = note.querySelector('textarea');
          const edit = note.querySelector(".edit");
          const mainDiv = note.querySelector(".main");
          document.querySelector('.notecontainer').appendChild(note);
        
          textarea.value = text;
          mainDiv.innerHTML = textarea.value;
          const dlt = note.querySelector(".delete");
          
          edit.addEventListener('click', () => {
            mainDiv.classList.toggle('hidden');
            textarea.classList.toggle('hidden');
         })

         textarea.addEventListener('change', (event) => {
                   const value = event.target.value;
                   mainDiv.innerHTML = value;
                   updateLSData();
         })
          dlt.addEventListener('click', ()=> {
             note.remove();
             updateLSData();
            
             const head = document.createElement('div');
             head.classList.add('noti');
             head.innerHTML = "DELETED";
             headr.insertAdjacentElement("beforebegin", head);
             

             

             setTimeout(() => {
                head.style.marginTop = "200px";
             }, 0);
             
             setTimeout(() => {
                head.style.marginTop = "0"
                
             }, 1000);
             head
        
        })
        
 }
 const notes =  JSON.parse(localStorage.getItem('notes'));

 
 if(notes){notes.forEach((note) => notemaker(note))};
 


btn.addEventListener('click', () => notemaker());