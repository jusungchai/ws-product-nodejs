const rateLimit = require('./rateLimit')


//Limit timer is based on the request IP address
//Due to unique IP check, saving to object may not be optimal for scaling and should be added to a database
const limiter = (req, res, next) => {
  const timeOut = 10; //time out interval in seconds
  const requestLimit = 3; //api request limiter

  if (!rateLimit.users[req.ip]){
    rateLimit.users[req.ip] = {      
      remain: requestLimit,
    };
  }

  rateLimit.users[req.ip].remain--;

  res.setHeader("X-RateLimit-Remaining", rateLimit.users[req.ip].remain);

  if (rateLimit.users[req.ip].remain < 0){
    if (rateLimit.users[req.ip].remain === -1){
      setTimeout(() => { 
        rateLimit.users[req.ip].remain = requestLimit;      
      }, timeOut * 1000);
    }    
    return res.sendStatus(429);
  }

  next();
}

module.exports = limiter;