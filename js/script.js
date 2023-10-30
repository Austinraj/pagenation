  
function paginate(items, itemsPerPage, paginationContainer) {
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    function showItems(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageItems = items.slice(startIndex, endIndex);
  
      const itemsContainer = document.querySelector("#items");
      itemsContainer.innerHTML = "";
  
      pageItems.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        itemsContainer.appendChild(li);
      });
    }
  
    function setupPagination() {
      const pagination = document.querySelector(paginationContainer);
      pagination.innerHTML = "";
  
      for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = i;
  
        if (i === currentPage) {
          link.classList.add("active");
        }
  
        link.addEventListener("click", (event) => {
          event.preventDefault();
          currentPage = i;
          showItems(currentPage);
  
          const currentActive = pagination.querySelector(".active");
          currentActive.classList.remove("active");
          link.classList.add("active");
        });
  
        pagination.appendChild(link);
      }
    }
  
    showItems(currentPage);
    setupPagination();
  }
  



  

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
    "Item 25",
    "Item 26",
    "Item 27",
    "Item 28",
    "Item 29",
    "Item 30",
    "Item 31",
    "Item 32",
    "Item 33",
    "Item 34",
    "Item 35",
  ];
  
  const itemsPerPage = 10;
  const paginationContainer = "#pagination";
  
  paginate(items, itemsPerPage, paginationContainer);