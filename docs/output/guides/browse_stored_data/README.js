Ext.data.JsonP.browse_stored_data({"title":"Browse server for media assets","guide":"<h1>Browse server for media assets</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/browse_stored_data-section-1'>1. Requirements</a></li>\n<li><a href='#!/guide/browse_stored_data-section-2'>2. Browse and show assets</a></li>\n</ol>\n</div>\n\n<h2 id='browse_stored_data-section-1'>1. Requirements</h2>\n\n<p>To have an access to media assets, first a valid discovered UPNP media instance should be resolved. For sample implementation, please follow section Media Discovery.</p>\n\n<h2 id='browse_stored_data-section-2'>2. Browse and show assets</h2>\n\n<p>Main logic is implemented inside MediaExplorer and MediaServers controllers. Visual part in the center is handled by view named VP.view.media.Explorer . A base for visual representation is ExtJs dataview with custom template. To have artwork and other details displayed inside dataview, we define a custom template.</p>\n\n<p>For the left side media tree we have a view named <a href=\"#!/api/VP.view.media.ServersTree\" rel=\"VP.view.media.ServersTree\" class=\"docClass\">VP.view.media.ServersTree</a> . This view extends tree panel, which is an ExtJs component responsive for rendering hierarchically structured sets of data. This component will automagically represent information from the bounded store.</p>\n\n<p>To feed the view stores with data, a method is called whenever user clicks on Media server icon or an interaction is done selected tree node.</p>\n\n<p>To load a fresh set of data Tree sores proxy is called with a key 'upnpBrowse' which will trigger a call to media server and return structured data.</p>\n\n<p>Detailed information on how to use these components can be found in following ExtJs documentation sections:</p>\n\n<ul>\n<li><a href=\"http://docs.sencha.com/ext-js/4-1/#!/api/Ext.data.Store\">Ext.data.Store</a></li>\n<li><a href=\"http://docs.sencha.com/ext-js/4-1/#!/api/Ext.view.View\">Ext.view.View</a></li>\n<li><a href=\"http://docs.sencha.com/ext-js/4-1/#!/api/Ext.panel.Panel\">Ext.panel.Panel</a></li>\n<li><a href=\"http://docs.sencha.com/ext-js/4-1/#!/api/Ext.XTemplate\">Ext.XTemplate</a></li>\n<li><a href=\"http://docs.sencha.com/ext-js/4-1/#!/api/Ext.tree.Panel\">Ext.tree.Panel</a></li>\n</ul>\n\n\n<p>Related information can also be found in the following Sencha guides:\n- <a href=\"http://docs.sencha.com/ext-js/4-1/#!/guide/data\">Data package concepts</a>\n- <a href=\"http://docs.sencha.com/ext-js/4-1/#!/guide/tree\">Trees</a></p>\n"});