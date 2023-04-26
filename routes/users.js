var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:m&:n&:e', function(req, res, next) {
  

    let m = parseInt(req.params.m);
    let n = parseInt(req.params.n);
    let e = req.params.e;

    if (e == 'i')
    {
        var acumulador = 1;
    
        for(let i = m; i <= n; i++)
        {   
            acumulador = acumulador * (i + (1/i));
        }
    
        res.json(acumulador);
    }
    else if (e == 'r')
    {
        res.json(recursivo(m,n));
    }
    else
    {
        res.status(400).json();
    }

});

module.exports = router;

function recursivo(m, n)
{
    if (m = n)
    {
        return (m + 1 / m);
    }
    else
    {
      return recursivo(m + 1, n) * (m + (1/m));
    }
    
}


