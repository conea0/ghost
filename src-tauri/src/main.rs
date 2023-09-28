// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod menu;
mod handler;

fn main() {
  tauri::Builder::default()
    .menu(menu::build_menu())
    .on_menu_event(menu::handle_menu_click)
    .invoke_handler(handler::build_handler())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}