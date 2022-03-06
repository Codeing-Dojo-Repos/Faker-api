const { request } = require("express")
const faker = require("faker")
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded(extended=true))


const createUser = () => {
    let id = faker.random.number({min: 10, max: 100})
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let phoneNumber = faker.phone.phoneNumber()
    let email = faker.internet.email()
    let password = faker.internet.password(8)

    return {
        _id: id,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password
    }
}

const createCompany = () => {
    let id = faker.random.number({min: 1000, max: 10000})
    let cName = faker.company.companyName()
    let street = faker.address.streetName()
    let city = faker.address.city()
    let state = faker.address.state()
    let zip = faker.address.zipCode()
    let country = faker.address.country()

    return {
        _id: id,
        name: cName,
        address: {
            street: street,
            city: city,
            state: state,
            zip: zip,
            country: country 
        }
    }
}

app.get("/api/users/new", (req, resp) => {
    let user = createUser();
    
    resp.json({
        user
    })
})

app.get("/api/companies/new", (req, resp) => {
    let co = createCompany();
    
    resp.json({
        co
    })
})

app.get("/api/user/company", (req, resp) => {
    let user = createUser();
    let co = createCompany();

    resp.json({
        user,
        co
    })
})



app.listen(8000, ()=>console.log("Nice connection!"))
