document.addEventListener('alpine:init', () => {

        Alpine.directive('list', (el, { expression }) => {
          el.innerHTML = `
          <ul x-data="` + expression + `">
              <template x-for="item in items">
                  <li x-text="item" class="border-gray-900 p-2 mb-2 bg-white border" ></li>
              </template>
          </ul>
        `;
      })
  
      Alpine.directive('slot', (el, { expression }) => {
        fetch('slots/' + expression)
        .then(response => response.text())
        .then(data =>  el.innerHTML = data);
      })
  
      })


      function getUsers(id) {
        return {
          // other default properties
          isLoading: false,
          users: null,
          init() {
            this.isLoading = true;
            fetch(`https://reqres.in/api/users/` + id)
              .then(res => res.json())
              .then(data => {
                this.isLoading = false;
                this.users = data;
              });
          }
        }
      }
