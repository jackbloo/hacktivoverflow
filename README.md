# hacktivoverflow
Best HacktivOverFlow Ever

#link
http://jack-overflow.jackbloo.com

## Installation

    npm install

For running

    npm run dev

## Special Features

- Using CRON it will fetch 3 highest votes every 1 week on sunday at 00:00 Asia/Jakarta local time
- Watched Tags
- upvoting and downvoting

## Routing

Complete Routing of this App

#  User Routes

Includes SignIn and Registration

# POST /user/signin

To Sign In without using google authorization


* **URL** 

    http://localhost:3000/user/signin

* **METHOD** 

    POST
* **URL Params**

    **none**
* **Data Params** 

        email:{
            type: string
            required: true
        } ,
        password:{
            type: string
            required: true
        }

* **Success Response** 

        {
            message: 'Login Success'
            status: 200
        }

* **Error Response** 

        {
            httpStatus: 400,
            message: 'Wrong Email/Password'
        }
        or
        {
            httpStatus: 404,
            message: 'Email Not Found'    
        }

# POST /user/register

To Register 

* **URL**

    http://localhost:3000/user/register

* **METHOD** 

    POST
* **URL Params**

    **none**
* **Data Params** 

        name:{
        type: string
        required: true
        } ,
        email:{
            type: string
            required: true
        },
        password:{
            type:string,
            required:true
        }

* **Success Response** 

            {
                message: 'Account is successfully created',
                status: 201
            }

* **Error Response** 

            {
                message: 'Internal Sever Error'
                status: 500
            }

## question Routes

Includes, CRUD of questions

## POST /questions/create

User creating questions 


* **URL** 

    http://localhost:3000/questions/create

* **METHOD**

    POST

* **Headers**

    token:

                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params** 

        {
            title:{
                type: string
                required: true
            } ,
            pertanyaan:{
                type: string
                required: true
            },
            tagku:[]
        }

* **Success Response** 


        data: {
            title:{
                type: string
                required: true
            } ,
            pertanyaan:{
                type: string
                required: true
            },
            tagku:[]
        },
        status: 201


* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## PATCH /question/update/:id

User can update their questions

* **URL** 

    http://localhost:3000/question/update/:id

* **METHOD**

    PATCH 

* **Headers**

    token:

                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

             {
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                },
            }

* **Success Response**

            data: {
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                },
        status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }

## DELETE /question/:id

Deleting User's questions

* **URL** 

    http://localhost:3000/question/:id

* **METHOD**

    DELETE  

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

        **none**

* **Success Response** 


            data: {
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                },
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## GET /question/

Get All questions

* **URL**

    http://localhost:3000/questions

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params** 

        **none**

* **Success Response** 

            data: [{
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                }],
            status: 200

* **Error Response** 


        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## GET /question/mine/:id

 Get One question

 * **URL** 

        http://localhost:3000/question/mine/:id

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

    **none**

* **Success Response** 

            data: {
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                },
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }

## GET /question/mine

 Get User's question

* **URL** 

    http://localhost:3000/question/mine

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params** 

    **none**

* **Success Response** 

            data: [{
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                }],
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }

## PATCH /question/upvote/:id

 Update User's upvote question


* **URL**

    http://localhost:3000/question/upvote/:id

* **METHOD**

    PATCH

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params**

    **none**

* **Success Response** 

            data: {
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                },
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## PATCH /question/downvote/:id

 Update User's downvote question

* **URL** 

        http://localhost:3000/question/downvote/:id

* **METHOD**

    PATCH

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params**

    **none**

* **Success Response** 


            data: {
                title:{
                    type: string
                    required: true
                } ,
                pertanyaan:{
                    type: string
                    required: true
                },
                tagku:[]
                },
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## PATCH /question/createTags

 Update User's question Tag


* **URL** 

    http://localhost:3000/question/createTags

* **METHOD**

    PATCH

* **Headers**

    token:

       eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params** 
    
                 {
                    tagku:[]
                  }

* **Success Response** 

                data: {
                    tagku:[]
                  },
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }

## GET /tags/:tag

Get Tags by Name


* **URL** 


        http://localhost:3000/question/tags/:tag     

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    tag=[string]

* **Data Params** 

    **none**

* **Success Response**

            data: {
                    tagku:[]
                  },
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## answer Routing

Include CRU of answer

## POST /answer/create

User creating answers


* **URL**

    http://localhost:3000/answer/create

* **METHOD**

    POST

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params**
    
            {
                title:{
                    type:String,
                    required: true
                },
                jawaban: {
                    type: String,
                    required: true
                },
            }

* **Success Response** 

            {
                data : {
                    title
                    jawaban
                    UserId
                    upvote
                    downvote
                    },
                status: 201
            }

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }



## PATCH /answer/update/:id

User can update their answers

* **URL**

        http://localhost:3000/answer/update/:id

* **METHOD**

    PATCH

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

            {
                title:{
                    type:String,
                    required: true
                },
                jawaban: {
                    type: String,
                    required: true
                },
            }

* **Success Response**

        {
                data : {
                title
                jawaban
                UserId
                upvote
                downvote
                },
                status: 200
        }

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }



## GET /answer/

Get All answer


* **URL** 

    http://localhost:3000/answer

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params**

    **none**

* **Success Response**

            {
                    data:[{
                title
                    jawaban
                    UserId
                    upvote
                    downvote
                    }],
                    status: 200
            }

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }

## GET /answer/mine/:id

 Get One answer

 * **URL** 

    http://localhost:3000/answer/mine/:id

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

    **none**

* **Success Response**

            {
                    data : [{
                        title,
                        jawaban,
                        UserId,
                        upvote,
                        downvote
                    }],
                    status: 200
            }

* **Error Response** 


        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## GET /answer/mine

 Get User's question


* **URL**

    http://localhost:3000/answer/mine

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params**

    **none**

* **Success Response** 

            {
                data : [{
                    title
                    jawaban
                    UserId
                    upvote
                    downvote
                }],
                status: 200
            }

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }




# ERROR

## Error Handling

Form of Error Handling


      code: httpStatus || 500,
      message,


## 400
Error caused by the Users ('Bad request')

      code: 400,
      'Email is already Registered',



## 401
Error due to the unauthorization


      code: 401,
      'Not Authorized',



## 403
Error caused by Token

      code: 403,
      'Token Undefined',



## 404
Error caused by Server could found

      code: 404,
      'Not Found',


## 500
Error cause by Internal Server Error

      code: 500,
      'Internal Server Error',
