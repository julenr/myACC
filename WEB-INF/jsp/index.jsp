<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet_2_0" %>
<%@ page contentType="text/html" isELIgnored="false" import="javax.portlet.PortletSession" %>
<%@ page import="javax.portlet.PortletRequest" %>
<portlet:defineObjects/>

<!DOCTYPE html>
<html>
    <!--[if lt IE 7 ]> <html lang="en" class="ie6 no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7" > <![endif]-->
    <!--[if IE 7 ]>    <html lang="en" class="ie7 no-js lt-ie10 lt-ie9 lt-ie8" > <![endif]-->
    <!--[if IE 8 ]>    <html lang="en" class="ie8 no-js lt-ie10 lt-ie9" > <![endif]-->
    <!--[if IE 9 ]>    <html lang="en" class="ie9 no-js lt-ie10" > <![endif]-->
    <!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="" > <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title>myACC</title>

        
        
            <meta name="viewport" content="width=device-width, initial-scale=1">
        

        
            <link href="<%= request.getContextPath() %>/build/styles.b3f6a05e009bd2df821e.css" rel="stylesheet">
        

        <script>
            (function(){
                var ef = function(){};
                window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
            }());
        </script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>

        
            <base href="<%= request.getContextPath() %>" />
        

        
            <script type="text/javascript" src="http://libs.coremetrics.com/eluminate.js"></script>
            <script type="text/javascript" src="<%= request.getContextPath() %>/build/assets/js/cmcustom.js"></script>
            <script type="text/javascript">
                cmSetClientID(
                        "99999999",
                         true,
                        "data.coremetrics.com",
                        "thesite.com"
                );
            </script>
        
        <style type="text/css">
            [ng-cloak] {display: none;}
        </style>
    </head>
    <body ng-cloak>
        
            <div id='noscript'>
                <div class="message" id="javascript-disabled">
                    <div class="page-wrapper">
                        <h2 class="title">Warning! JavaScript required.</h2>
                        <p>To use this website you need to have JavaScript enabled. Without these features parts of the site may not function correctly.</p>
                    </div>
                </div>
            </div>
            <script>document.getElementById('noscript').style.display='none';</script>
            <!--[if lte IE 9]>
            <div class="message" id="unsupported-browser">
                <noscript>
                    <div class="page-wrapper">
                        <h2 class="title">Warning! Unsupported browser.</h2>
                        <p>We have detected that you are using an unsupported browser, we cannot guarantee that this website will look and function as intended on your browser. <a href="https://www.google.com/search?q=web+browser">Upgrade your browser now</a>.</p>
                    </div>
                </noscript>
            </div>
            <![endif]-->
        

        <div data-nav-bar title="myACC"></div>
        <div class="header-container"></div>
        <div class="container">
            <div class="row"></div>
            <ui-view></ui-view>
        </div>
        <div class="footer">
            <div class="container">
                <p>| MyACC | Solnet Solutions</p>
            </div>
        </div>

        
            <script>
                
                window['env'] = {"apiHost":"<%= request.getContextPath() %>"};
                
            </script>
        

        
            <script src="<%= request.getContextPath() %>/build/manifest.51212737651846a423e8.js"></script>
        
            <script src="<%= request.getContextPath() %>/build/vendor.24ef8500889d28a8ddf4.js"></script>
        
            <script src="<%= request.getContextPath() %>/build/app.b3f6a05e009bd2df821e.js"></script>
        

        

        

        
            <script type="text/javascript">
                cmCreatePageviewTag(
                        'HOME PAGE'
                        
                            ,'HOME'
                        
                        
                            ,'location:wellington'
                        
                        
                            ,'14'
                        
                        
                            ,'Remove if not used'
                        
                        
                            ,'Remove if not used'
                        
                );
            </script>
        

    </body>
</html>