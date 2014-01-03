// Macro recorded on Tue May 15 2007 01:18:00 GMT+0200
komodo.assertMacroVersion(3);
if (komodo.view) { komodo.view.setFocus() };

var ke = komodo.editor;
var savePos = ke.currentPos;

komodo.doCommand('cmd_end')
komodo.doCommand('cmd_newline')
komodo.doCommand('cmd_linePrevious')

komodo.doCommand('cmd_end')
komodo.doCommand('cmd_selectHome')
komodo.doCommand('cmd_selectHome')
new_selection = komodo.interpolate('%s');

komodo.doCommand('cmd_lineNext')

var pos = ke.currentPos;
ke.insertText(pos,new_selection);

ke.gotoPos(savePos);
