

async function get_data(params) {
  let url = "http://gpa.madbob.org/query.php?stop="+params["stop"];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`)
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
