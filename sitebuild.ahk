; AutoHotKey Script for front-end development
; For AutoHotKey Document

;hotkeys
================
^!n::
IfWinExist Untitled - Notepad
	WinActivate
else
	Run Notepad
return

^!c::
IfWinExist Untitled - Calc
	WinActivate
else
	Run Calc
return

;hotstrings
;================
;CSS abbrevations
;----------------
::fll::float: left;
::flr::float: right;
::fln::float: none;
::dpb::display: block;
::dpi::display: inline;
::dpib::display: inline-block;
::dpt::display: table;
::dptr::display: table-row;
::dptd::display: table-cell;
::bdw::border-width: 0 0 0 0;
::pdb::padding-bottom: 0;
::pdt::padding-top: 0;
::pdr::padding-right: 0;
::pdl::padding-left: 0;
::mrb::margin-bottom: 0;
::mrt::margin-top: 0;
::mrl::margin-left: 0;
::mrr::margin-right: 0;
::fwb::font-weight: 700;
::fsi::font-style: italic;
::ttu::text-transform: uppercase;
;----------------
;JavaScript
;----------------
::dgi::document.getElementById('');
::dce::document.createElement('');
::dgt::document.getElementsByTagName('');
