
    const getIp = function(req, res) {
      const ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.connection.socket.remoteAddress
         res.json({ip});
    };

    export default getIp;