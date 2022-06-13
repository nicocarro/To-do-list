window.addEventListener('load', () => {                             //escucha y espera a que la pantalla se cargue completamente
    const form = document.querySelector('#new__task__form');        //toma elemento por id y crea constante
    const input = document.querySelector('#new__task__text');       //toma elemento por id y crea constante
    const list__el = document.querySelector('#tasks');              //toma elemento por id y crea constante

    form.addEventListener('submit', (e) => {                        //escucha a que se haga submit al form
        e.preventDefault();                                         //previene que se referzque la pagina al hacer submit
    
        const task = input.value;

        if (!task){                                                 //si no hay task ingresado, salta alerta
            alert("Please add a task");
            return;
        }

        const task__el = document.createElement('div');              //createEl permite crear nodos en el DOM para poder usar en la pagina
        task__el.classList.add('task');                              //le agrega la clase task al elemento creado
    
        const task__content__el = document.createElement('div');
        task__content__el.classList.add('content');

        task__el.appendChild(task__content__el);                     //adjunta un hijo al elemento padre determinado
        
        const task__input__el = document.createElement('input');
        task__input__el.classList.add('task__Text');
        task__input__el.type = 'text';
        task__input__el.value = task;
        task__input__el.setAttribute('readonly', 'readonly');

        task__content__el.appendChild(task__input__el);


        const task__actions__el = document.createElement('div');
        task__actions__el.classList.add('actions');

        const task__edit__el = document.createElement('button');
        task__edit__el.classList.add('edit');
        task__edit__el.innerHTML = "Edit";

        const task__delete__el = document.createElement('button');
        task__delete__el.classList.add('delete');
        task__delete__el.innerHTML = "Delete";

        task__actions__el.appendChild(task__edit__el);
        task__actions__el.appendChild(task__delete__el);

        task__el.appendChild(task__actions__el);
        
        list__el.appendChild(task__el);

        input.value = "";


        task__edit__el.addEventListener('click' , () => {                       //escucha al evento click
            if (task__edit__el.innerText.toLocaleLowerCase() == "edit"){        //compara el texto con edit
                task__input__el.removeAttribute('readonly');                    //remueve readonly del elemento
            task__input__el.focus();                                            //selecciona directo el elemento para no tner que seleccionarlo
            task__edit__el.innerText = "Save";                                  //cambia el texto del boton a save despues de editar
            } else {
                task__input__el.setAttribute('readonly', 'readonly');           //cambia el atributo a redonly
                task__edit__el.innerText = "Edit";
            }
        });

        task__delete__el.addEventListener('click', () => {                      //al hacer click elimina el elemento
            list__el.removeChild(task__el);
        });
    })
})