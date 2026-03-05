import { faker } from '@faker-js/faker';

export const generateUserData = () => ({
  fullName: faker.person.fullName(),
  email: faker.internet.email(),
  telephone: faker.string.numeric(10),
  gender: faker.helpers.arrayElement(['Male','Female','Not Applicable']),
  experience: faker.helpers.arrayElement(['1','2','3','4','5','6','7','Above 7']),
  skills: faker.helpers.arrayElements(
    ['ManualTesting','AutomationTesting','TestNG','apitesting','HTML','Java','C#'],
    faker.number.int({ min: 1, max: 3 })
  ),
  tools: faker.helpers.arrayElements(
    ['Selenium','Cypress','WebdriverIO','Protractor','Jenkins','Docker','Postman','TestStackWhite','JMeter','CodedUI'],
    faker.number.int({ min: 1, max: 3 })
  ),
  profilePic: 'assets/Aarish - Picture.jpg', // make sure this path exists
});
