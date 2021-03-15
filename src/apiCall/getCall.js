export const getCall = async () => {
  let results = [];
  try {
    var myHeaders = new Headers();
    myHeaders.append("api-version", "2");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    let data = await fetch(
      "https://api.silvercar.com/locations?sort=name",
      requestOptions
    );

    if (data.status === 200) {
      console.log("Api call success-Test Passed");
    } else {
      console.log("Api call success-Test test failed");
    }
    let response = await data.json();
    return response;
  } catch (e) {
    console.log(e);
    return results;
  }
};
