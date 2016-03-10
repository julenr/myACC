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
    

    
    <link href="<%= request.getContextPath() %>/build/styles.5b895e478ea5fd946ec9.css" rel="stylesheet">
    

    <script>
        (function(){
            var ef = function(){};
            window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
        }());
    </script>

    
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
    
</head>
<body>

<div id='noscript'>
    <div class="message" id="javascript-disabled">
        <div class="page-wrapper">
            <h2 class="title">Warning! JavaScript required.</h2>
            <p>To use this website you need to have JavaScript enabled. Without these features parts of the site may not function correctly.</p>
        </div>
    </div>
</div>
<script>document.getElementById('noscript').style.display='none';</script>
<!--[if lt IE 9]>
<div class="message" id="unsupported-browser">
    <div class="page-wrapper">
        <h2 class="title">Warning! Unsupported browser.</h2>
        <p>We have detected that you are using an unsupported browser, we cannot guarantee that this website will look and function as intended on your browser. <a href="https://www.google.com/search?q=web+browser">Upgrade your browser now</a>.</p>
    </div>
</div>
<![endif]-->


<!--<div data-nav-bar title="myACC"></div>-->
<div class="container">
    <br/>
    <ui-view></ui-view>
</div>


<script>
    
    window['env'] = {"apiHost":"<%= request.getContextPath() %>"};
    
</script>



<script src="<%= request.getContextPath() %>/build/manifest.d32a84582b5162fedbb3.js"></script>

<script src="<%= request.getContextPath() %>/build/vendor.c1072932083029318965.js"></script>

<script src="<%= request.getContextPath() %>/build/app.5b895e478ea5fd946ec9.js"></script>







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
