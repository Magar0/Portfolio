# `Portfolio using Next JS`

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)

## General info

A personal portfolio website showcasing my skills and projects. Built using Next.js for server-side rendering and optimized performance.

<img src="https://github.com/user-attachments/assets/7e980bc0-c06c-4b87-af08-bce218dcf699" height="225" >
<img src="https://github.com/user-attachments/assets/cd2441db-f309-4ad3-88bd-dba4076f25d1" height="225" >
<img src="https://github.com/user-attachments/assets/11adca24-a628-4cbb-8347-41aa4d9846c3" height="225" >
<img src="https://github.com/user-attachments/assets/6e23ecce-947a-46bc-93ce-abf6e78e1d7c" height="225" >

* Responsive Design: Adapts seamlessly to different screen sizes.
* Framer Motion Animations: Smooth and engaging user experience.
* Contact Form: Powered by React Hook Form and Zod for validation, with data stored in MongoDB using Mongoose.
* Project Slider: Interactive navigation through my projects.
* Stylish UI: Designed with Shadcn UI and Tailwind CSS.


## Technologies
* Next JS
* Framer Motion
* React Hook Form, Zod
* MongoDB, Mongoose
* Shadcn UI, Tailwind CSS
	
## Setup
1. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
     NEXT_URL_MONGO_DB="your_mongo_uri"
     ```
2. Install dependencies and run server:
```
 npm install
 npm run dev
```

## API Endpoints

| Endpoint | Description | Method | Request Body | Response Format (Example)
|----------|-------------|--------|--------------|----------------------------|
`/api` | post message | POST | `{ firstName:string, lastName?:string, phone?: string, email: string , service?:'frontend' or 'backend' or 'fullstack', message: string}` | {message: string}|
