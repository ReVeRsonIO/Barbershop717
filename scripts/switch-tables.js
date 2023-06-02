function toggleTables() {
    var maleTable = document.querySelector(".male-table");
    var femaleTable = document.querySelector(".female-table");

    if(maleTable.style.display == "none") {
        maleTable.style.display = "table";
        femaleTable.style.display = "none";
    } else {
        maleTable.style.display = "none";
        femaleTable.style.display = "table";
    }
  }