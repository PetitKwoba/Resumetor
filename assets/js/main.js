AOS.init();

function sendPost() {
    var formData = new FormData();
    var inputFile = document.getElementById('fileInput').files[0];
    //Adding required parameters
    formData.append("inputFile", inputFile);
    formData.append("outputFormat", "pdf");
    formData.append("conversionParameters", "{}");
    formData.append("async", "false");
    var request = new XMLHttpRequest();
    request.open('POST', 'https://api2.docconversionapi.com/jobs/create', true);
    request.responseType = 'json';
    //Please, paste your AppId and SecretKey values here
    request.setRequestHeader("X-ApplicationID", '51242043-10da-4525-be85-7407c1c6b29f');
    request.setRequestHeader("X-SecretKey", '5ae6ec08-848b-428c-be06-3fadc8dcaf46');
    request.onload = function () {
        if (request.status == 200) {
            console.log(request.response);
        }
    }
    request.send(formData);
}