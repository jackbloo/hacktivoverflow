# hacktivoverflow
Best HacktivOverFlow Ever

# link
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

##  User Routes

Includes SignIn  and Regisitration

## POST /user/signin

To Sign In without using google authorization

    url: 'http://localhost:3000/user/signin'
    headers: token *required*,
    body: {
        email:{
            type: string
            required: true
        } ,
        password:{
            type: string
            required: true
        }
    },
    response status: {
        success: {
            status: 200,
            token
        }
    }


## POST /user/register

To Register Account in Hacktivoverflow

    url: 'http://localhost:3000/user/register'
    headers: none,
    body: {
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
    },
    response status: {
        success: {
            status: 201
        }
    }

## question Routes

Includes, CRUD of questions

## POST /questions/create

User creating questions 

    url: 'http://localhost:3000/questions/create'
    headers: token *required*,
    body: {
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
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 201
        }
    }


## PATCH /question/update/:id

User can update their questions

    url: 'http://localhost:3000/question/update/:id'
    headers: token *required*,
    body: {
        title: String,
        pertanyaan: String,
        tags: [String]
    }, 
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 201
        }
    }

## DELETE /question/:id

Deleting User's questions

    url: 'http://localhost:3000/question/:id'
    headers: token *required*
    body: none,
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }

## GET /question/

Get All questions

    url: 'http://localhost:3000/questions',
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data:{
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }
## GET /question/mine/:id

 Get One question

    url: 'http://localhost:3000/question/mine/:id'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }

## GET /question/mine

 Get User's question

    url: 'http://localhost:3000/question/mine'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }

## PATCH /question/upvote/:id

 Update User's upvote question

    url: 'http://localhost:3000/question/upvote/:id'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }

## PATCH /question/downvote/:id

 Update User's downvote question

    url: 'http://localhost:3000/question/downvote/:id'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }
    
## PATCH /question/createTags

 Update User's question Tag

    url: 'http://localhost:3000/question/createTags'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }

## GET /tags/:tag

Get Tags by Name

    url: 'http://localhost:3000/question/tags/:tag'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
                title,
                pertanyaan,
                upvote,
                downvote,
                UserId,
                tags
            },
            status: 200
        }
    }

## answer Routing

Include CRU of answer

## POST /answer/create

User creating answers

    url: 'http://localhost:3000/answer/create'
    headers: token *required*,
    body: {
    title:{
        type:String,
        required: true
     },
    jawaban: {
        type: String,
        required: true
     },
    },
    response status: {
        success: {
            data : {
            title
            jawaban
            UserId
            upvote
            downvote
            },
            status: 201
        }
    }


## PATCH /answer/update/:id

User can update their answers

    url: 'http://localhost:3000/answer/update/:id'
    headers: token *required*,
    body: {
    title:{
        type:String,
        required: true
     },
    jawaban: {
        type: String,
        required: true
     },
    }, 
    response status: {
        success: {
            data : {
            title
            jawaban
            UserId
            upvote
            downvote
            },
            status: 201
        }
    }



## GET /answer/

Get All answer

    url: 'http://localhost:3000/answer',
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data:{
           title
            jawaban
            UserId
            upvote
            downvote
            },
            status: 200
        }
    }
## GET /answer/mine/:id

 Get One answer

    url: 'http://localhost:3000/answer/mine/:id'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
            title
            jawaban
            UserId
            upvote
            downvote
            },
            status: 200
        }
    }

## GET /answer/mine

 Get User's question

    url: 'http://localhost:3000/answer/mine'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
            title
            jawaban
            UserId
            upvote
            downvote
            },
            status: 200
        }
    }

## Admin Routing

Include Login of Admin

## POST /admin/login

Admin login

    url: 'http://localhost:3000/answers/:id'
    headers: token *required*,
    body: {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    },
    response status: {
        success: {
            data : {
                token
            },
            status: 201
        }
    }




#ERROR

## Error Handling

Form of Error Handling


      code: httpStatus || 406,
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
Error caused by Token

      code: 404,
      'Not Found',


## 500
Error cause by Internal Server Error

      code: 500,
      'Internal Server Error',
