# hacktivoverflow
Best HacktivOverFlow Ever

## Installation

    npm install

For running

    npm run dev


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
        tags:[]
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
        tags: []
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

## GET /questions/

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

## Cart Routing

Include CRUD of cart

## POST /carts/:id

User creating Carts

    url: 'http://localhost:3000/carts/:id'
    headers: token *required*,
    body: {
       questionName: {
        type: String,
        required: true
    },
    questionPrice: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        default: 0
    },
    questionStock: {
        type: Number,
        required: true
    },
    checkout_status: {
        type: Boolean,
        default:false
    },
    questionId: {type: Schema.Types.ObjectId, ref: 'questions'},
    UserId: {type: Schema.Types.ObjectId, ref: 'users' },
    transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
    },
    response status: {
        success: {
            data : {
                questionName
                questionPrice
                quantity
                questionStock
                checkout_status
                questionId
                UserId
                transactionId
            },
            status: 201
        }
    }


## PATCH /carts/:id

User can update their carts

    url: 'http://localhost:3000/carts/:id'
    headers: token *required*,
    body: {
        questionName
        questionPrice
        quantity
        questionStock
        checkout_status
        questionId
        UserId
        transactionId
    }, 
    response status: {
        success: {
            data : {
        questionName
        questionPrice
        quantity
        questionStock
        checkout_status
        questionId
        UserId
        transactionId
            },
            status: 201
        }
    }

## DELETE /carts/:id

Deleting User's carts

    url: 'http://localhost:3000/carts/:id'
    headers: token *required*
    body: none,
    response status: {
        success: {
            data : {
        questionName
        questionPrice
        quantity
        questionStock
        checkout_status
        questionId
        UserId
        transactionId
            },
            status: 200
        }
    }

## GET /carts/

Get All carts
    url: 'http://localhost:3000/carts',
    headers: token *required*,
    body: none,
    response status: {
        success: {
            name : {
                type: string
            },
            data:{
            questionName
            questionPrice
            quantity
            questionStock
            checkout_status
            questionId
            UserId
            transactionId
            },
            status: 200
        }
    }
## GET /carts/:id

 Get One cart

    url: 'http://localhost:3000/carts/:id'
    headers: token *required*,
    body: 
    id: {
        type: String
        },
    response status: {
        success: {
            data : {
        questionName
        questionPrice
        quantity
        questionStock
        checkout_status
        questionId
        UserId
        transactionId
            },
            status: 200
        }
    }

## Admin Routing

Include Login of Admin

## POST /admin/login

Admin login

    url: 'http://localhost:3000/carts/:id'
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
## Transactions Routing

Include CRUD of Transactions

## POST /transaction/create

Creating transaction

    url: 'http://localhost:3000/transaction/create'
    headers: token *required*,
    body: {
       total_price:{
        type: Number,
        required: true
    },
    UserId: {type: Schema.Types.ObjectId, ref: 'users' },
    send_status: {
        type: Boolean,
        default: false
    },
    arrived_status: {
        type: Boolean,
        default:false
    }
    },
    response status: {
        success: {
            data : {
               total_price
                UserId
                send_status
                arrived_status
            },
            status: 201
        }
    }


## PATCH /transaction/:id

Updating transaction

    url: 'http://localhost:3000/transaction/:id'
    headers: token *required*,
    body: {
    total_price
    UserId
    send_status
    arrived_status
    }, 
    response status: {
        success: {
            data : {
       total_price
        UserId
        send_status
        arrived_status
            },
            status: 201
        }
    }


## GET /transaction/

Get All transactions

    url: 'http://localhost:3000/transaction',
    headers: token *required*,
    body: none,
    response status: {
        success: {
            name : {
                type: string
            },
            data:{
         total_price
        UserId
        send_status
        arrived_status
            },
            status: 200
        }
    }
## GET /transaction/:id

 Get One transaction

    url: 'http://localhost:3000/transaction/:id'
    headers: token *required*,
    body: 
    id: {
        type: String
        },
    response status: {
        success: {
            data : {
       total_price
        UserId
        send_status
        arrived_status
            },
            status: 200
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
