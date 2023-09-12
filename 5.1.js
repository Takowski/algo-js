function askTVseries(name, year, cast) {
    let tvSeries = {
      name: name,
      year: year,
      cast: cast,
    };
    return tvSeries;
  }
  
  let name = prompt("What's your favourite TV show ?");
  let year = parseInt(prompt("What's the release year ?"));
  let castmember = prompt("Enter the castmembers separated by a coma :");
  let cast = castmember.split(",");
  
  let seriesobject = askTVseries(name, year, cast);
  const json = JSON.stringify(askTVseries(name, year, cast));
  console.log(json);
  
