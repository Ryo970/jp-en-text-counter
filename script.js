function updateProgress(id, current, max) {
    // X（Twitter）の場合の特別処理
    if (id === 'x') {
        const text = editor.value;
        let points = 0;
        for (let i = 0; i < text.length; i++) {
            // 全角（日本語など）は2pt、半角は1pt
            points += (text.charCodeAt(i) > 255) ? 2 : 1;
        }
        
        // 日本語ユーザーにわかりやすく「140文字」をベースにする
        // 280pt満点だけど、表示上は 140文字分 として計算
        const displayCurrent = Math.ceil(points / 2);
        const displayMax = 140;
        
        const percent = Math.min((points / 280) * 100, 100);
        const bar = document.getElementById('x-bar');
        const label = document.getElementById('x-label');
        
        bar.style.width = percent + '%';
        label.textContent = `${displayCurrent}/${displayMax}`;
        
        // 超過判定
        bar.className = points > 280 ? 'bg-red-500 h-full transition-width' : 'bg-slate-800 h-full transition-width';
        if (points > 280) label.classList.add('text-red-500');
        else label.classList.remove('text-red-500');
        
        return;
    }
    // ... Instagramなどの他のSNS処理
}
