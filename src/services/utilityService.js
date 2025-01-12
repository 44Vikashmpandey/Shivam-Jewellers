import emailjs from '@emailjs/browser';

export const sendEmail = (name, email, subject, message) => {
    return new Promise((resolve, reject) => {
        const serviceID = 'service_tz0z06v';
        const templateID = 'template_b4xs06k';
        const privateID = 'OwplFKZTSjrmO1hIv'
        // serviced - service_tz0z06v
        // temp - template_b4xs06k
        
        let msg = ""
        msg = "Contact Email : " + email
        msg += "\n description : " + subject
        msg += "\n contact number : " + message
        // msg += "\n description : " + message

        const payload = {
            to_name: "Shivam Jewellers",
            from_name: name,
            message: msg
        }

        emailjs.send(
            serviceID,
            templateID,
            payload,
            privateID
        )
            .then((response) => {
                if (response.status === 200) {
                    alert("Thank you! We have received your request successfully. We will reach out to you as soon as possible.")
                    resolve()
                } else {
                    alert("Failed to submit your request, Please try again.")
                    reject()
                }
            })
            .catch((error) => {
                alert("Failed to submit your request, Please try again.")
                reject()
            });
    })
}