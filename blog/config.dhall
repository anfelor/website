let prelude = ../../dhallow/docs/0.1.0.0/Prelude
in { css =
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
, locale = "en_US"
, https = True
, author = "Anton Felix Lorenzen"
, siteName = "Anton Lorenzen's blog"
, folder = "../anfelor.github.io/blog"
, twitter =
    [{ handle = "@anton_lorenzen"
     , imageUrl = "https://anfelor.github.io/img/anfelor_profile.jpg"
    }] : Optional { handle : Text, imageUrl : Text }
}
