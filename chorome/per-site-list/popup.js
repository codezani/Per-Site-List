document.addEventListener("DOMContentLoaded", async () => {
  const siteNameEl = document.getElementById("site-name");
  const input = document.getElementById("new-item");
  const addBtn = document.getElementById("add-btn");
  const listEl = document.getElementById("list");

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const domain = url.hostname;
  siteNameEl.textContent = domain;

  const storageKey = `list_${domain}`;

  const loadList = async () => {
    const result = await chrome.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    renderList(items);
  };

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

  const addItem = async () => {
    const text = input.value.trim();
    if (!text) return;

    const result = await chrome.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    items.push({ text, done: false });

    await chrome.storage.local.set({ [storageKey]: items });
    input.value = "";
    loadList();
  };

  const deleteItem = async (index) => {
    const result = await chrome.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    items.splice(index, 1);
    await chrome.storage.local.set({ [storageKey]: items });
    loadList();
  };

  const toggleItem = async (index) => {
    const result = await chrome.storage.local.get(storageKey);
    const items = result[storageKey] || [];
    items[index].done = !items[index].done;
    await chrome.storage.local.set({ [storageKey]: items });
    loadList();
  };

  addBtn.onclick = addItem;
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addItem();
  });

  loadList();
});