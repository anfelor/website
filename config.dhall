{ css =
    [ { cssSrc = "/css/main.min.css" }
    , { cssSrc = "https://unpkg.com/purecss@0.6.2/build/grids-responsive-min.css" }
    , { cssSrc = "https://unpkg.com/purecss@0.6.2/build/pure-min.css" } 
    ]
, js =
    [ { jsSrc = "/js/main.min.js"
      , jsAsLastElement = True
      }
    ]
, latexTemplate = "css/template.tex"
, domain = "anfelor.github.io"
, https = True
, author = "Anton Felix Lorenzen"
, siteName = "Anton Lorenzen's blog"
}
