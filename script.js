fetch("data.json")
  .then(response => response.json())
  .then(data => {

    var chart = new FamilyTree(document.getElementById("tree"), {
      nodeBinding: {
        field_0: "name"
      }
    });

    chart.load(data);

  });