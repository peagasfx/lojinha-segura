const e = () => {
    let e = () => typeof window < `u` && window.ttq;
    return {
        trackPurchase: t => {
            if (!e()) {
                console.warn(`[TikTok Pixel] Pixel não está carregado`);
                return
            }
            try {
                if (t.customer) {
                    let e = {};
                    if (t.customer.email && (e.email = t.customer.email),
                    t.customer.phone) {
                        let n = t.customer.phone.replace(/\D/g, ``);
                        n.length >= 10 && (e.phone_number = `+55${n}`)
                    }
                    t.customer.cpf && (e.external_id = t.customer.cpf.replace(/\D/g, ``)),
                    Object.keys(e).length > 0 && (window.ttq.identify(e),
                    console.log(`[TikTok Pixel] 👤 Usuário identificado:`, e))
                }
                let e = {
                    content_id: t.productId || t.orderId || ``,
                    content_type: `product`,
                    content_name: t.productName || t.name || ``,
                    price: t.value,
                    value: t.value,
                    quantity: t.quantity || 1,
                    currency: `BRL`,
                    event_id: t.orderId || `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
                };
                t.category && (e.content_category = t.category),
                window.ttq.track(`CompletePayment`, e),
                console.log(`[TikTok Pixel] ✅ CompletePayment disparado:`, {
                    event: e,
                    customer: t.customer ? `Identificado` : `Não fornecido`
                })
            } catch (e) {
                console.error(`[TikTok Pixel] ❌ Erro ao disparar evento:`, e)
            }
        }
        ,
        trackEvent: (t, n={}) => {
            if (!e()) {
                console.warn(`[TikTok Pixel] Pixel não está carregado`);
                return
            }
            try {
                window.ttq.track(t, n),
                console.log(`[TikTok Pixel] ✅ ${t} disparado:`, n)
            } catch (e) {
                console.error(`[TikTok Pixel] ❌ Erro ao disparar ${t}:`, e)
            }
        }
        ,
        isTikTokLoaded: e
    }
}
;
export {e as t};
