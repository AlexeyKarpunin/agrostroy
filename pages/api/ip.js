
    const ipMiddleware = function(req, res) {
      const ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.connection.socket.remoteAddress
         console.log(ip);
         res.json({ip});
    };

    export default ipMiddleware;