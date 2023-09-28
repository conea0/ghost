use tauri::{CustomMenuItem, Menu, MenuItem, Submenu, Window};

pub fn build_menu() -> Menu {
	return Menu::new()
		.add_submenu(get_file_submenu())
}

pub fn handle_menu_click(event: tauri::WindowMenuEvent) {
	match event.menu_item_id() {
		"import" => {
			let window = event.window();
      window.emit("import", "import".to_string()).unwrap();
		},
		_ => {}
	}
}

pub fn get_file_submenu() -> Submenu {
	let import_file = CustomMenuItem::new("import".to_string(), "Import");

	return Submenu::new(
		"File",
		Menu::new()
			.add_item(import_file)
	);
}