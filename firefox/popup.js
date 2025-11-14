document.addEventListener("DOMContentLoaded", async () => {
  const siteNameEl = document.getElementById("site-name");
  const input = document.getElementById("new-item");
  const addBtn = document.getElementById("add-btn");
  const listEl = document.getElementById("list");

  // Get the active tab
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const domain = url.hostname;
  siteNameEl.textContent = domain;

  const storageKey = `list_${domain}`;

  // Load list from local storage
  const loadList = async () => {
    const result = await browser.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    renderList(items);
  };

  // Render the list
  const renderList = (items) => {
    listEl.innerHTML = "";
    items.forEach((item, index) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.done;
      checkbox.onchange = () => toggleItem(index);

      const span = document.createElement("span");
      span.textContent = item.text;
      if (item.done) span.style.textDecoration = "line-through";

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = () => deleteItem(index);

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(delBtn);
      listEl.appendChild(li);
    });
  };

  // Add new item
  const addItem = async () => {
    const text = input.value.trim();
    if (!text) return;

    const result = await browser.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    items.push({ text, done: false });

    await browser.storage.local.set({ [storageKey]: items });
    input.value = "";
    loadList();
  };

  // Delete item
  const deleteItem = async (index) => {
    const result = await browser.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    items.splice(index, 1);
    await browser.storage.local.set({ [storageKey]: items });
    loadList();
  };

  // Toggle done state
  const toggleItem = async (index) => {
    const result = await browser.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    items[index].done = !items[index].done;
    await browser.storage.local.set({ [storageKey]: items });
    loadList();
  };

  // Event listeners
  addBtn.onclick = addItem;
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addItem();
  });

  // Initial load
  loadList();
});