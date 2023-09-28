use tauri::{
	command, generate_handler, AppHandle, InvokeHandler, LogicalSize, Manager, State, Window, Wry,
};

#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}

pub fn build_handler() ->Box<InvokeHandler<Wry>> {
	return Box::new(generate_handler![
		greet
	]);
}