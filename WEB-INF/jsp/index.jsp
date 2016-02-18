
        
        <base href="<%= request.getContextPath() %>" />
        
        
            <link href="<%= request.getContextPath() %>/build/styles.8e6185d2b79213b13719.css" rel="stylesheet">
        
        
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
            <ui-view></ui-view>
        </div>

        
            <script>
                
                window['env'] = {"apiHost":"<%= request.getContextPath() %>"};
                
            </script>
        

        
            <script src="<%= request.getContextPath() %>/build/manifest.1a0bd507dd39a12dd10a.js"></script>
        
            <script src="<%= request.getContextPath() %>/build/vendor.20d6de34157c576c28f9.js"></script>
        
            <script src="<%= request.getContextPath() %>/build/app.8e6185d2b79213b13719.js"></script>
        