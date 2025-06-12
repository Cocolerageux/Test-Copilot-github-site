import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out!</p>
            <h2>Contact Information</h2>
            <p>Email: info@burgerrestaurant.com</p>
            <p>Phone: (123) 456-7890</p>
            <h2>Send us a message</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;