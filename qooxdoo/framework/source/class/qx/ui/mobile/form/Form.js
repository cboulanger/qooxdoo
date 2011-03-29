/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tino Butz (tbtz)

************************************************************************ */

/**
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 * 
 * Representation of a form. A form widget can contain one or more {@link Row} widgets.
 * 
 * *Example*
 *
 * Here is a little example of how to use the widget.
 *
 * <pre class='javascript'>
 *   var form = new qx.ui.mobile.form.Form();
 *   var row = new qx.ui.mobile.form.Row();
 *   row.add(new qx.ui.mobile.form.TextField());
 * 
 *   this.getRoot.add(form);
 * </pre>
 *
 * This example creates a form and adds a row with a text field in it.
 */
qx.Class.define("qx.ui.mobile.form.Form",
{
  extend : qx.ui.mobile.core.Widget,
  include : [ qx.ui.mobile.core.MChildrenHandling ],


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    // overridden
    defaultCssClass :
    {
      refine : true,
      init : "form"
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // overridden
    _getTagName : function()
    {
      // TODO: use real form tag here
      // we need submit functionality
      return "ul";
    }
  }
});
