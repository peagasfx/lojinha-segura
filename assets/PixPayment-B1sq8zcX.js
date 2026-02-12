import {c as e, d as t, l as n, p as r, v as i, x as a} from "./index-CRH4LhSi.js";
import {t as o} from "./useTikTokPixel-nmZ2TpmY.js";
var s = a()
  , c = t();
function l() {
    let t = n()
      , {pixCode: a, transactionId: l, expiresAt: u, total: d, customerData: f} = i().state || {}
      , [p,m] = (0,
    s.useState)(!1)
      , [h,g] = (0,
    s.useState)(``)
      , [_,v] = (0,
    s.useState)(`pending`)
      , {trackPurchase: y} = o();
    return (0,
    s.useEffect)( () => {
        a || t(`/`)
    }
    , [a, t]),
    (0,
    s.useEffect)( () => {
        if (!u)
            return;
        let e = () => {
            let e = new Date(u) - Date.now();
            if (e <= 0) {
                g(`Expirado`);
                return
            }
            let t = Math.floor(e / 6e4)
              , n = Math.floor(e % 6e4 / 1e3);
            g(`${String(t).padStart(2, `0`)}:${String(n).padStart(2, `0`)}`)
        }
        ;
        e();
        let t = setInterval(e, 1e3);
        return () => clearInterval(t)
    }
    , [u]),
    (0,
    s.useEffect)( () => {
        if (!l)
            return;
        console.log(`[PixPayment] Iniciando polling de pagamento - TxID:`, l);
        let n = setInterval(async () => {
            try {
                console.log(`[PixPayment] Verificando status do PIX...`, l);
                let r = await e(l);
                console.log(`[PixPayment] Status recebido:`, r),
                (r.paid || r.status === `approved` || r.status === `COMPLETED`) && (console.log(`[PixPayment] ✅ Pagamento aprovado! Redirecionando para Upsell1...`),
                v(`paid`),
                clearInterval(n),
                y({
                    productName: `Pedido Garimpo Barato`,
                    value: d,
                    orderId: l,
                    quantity: 1,
                    customer: {
                        email: f?.email || ``,
                        phone: f?.telefone || ``,
                        cpf: f?.cpf || ``
                    }
                }),
                setTimeout( () => {
                    t(`/upsell1`, {
                        state: {
                            customerData: f,
                            mainOrderValue: d
                        }
                    })
                }
                , 1500))
            } catch (e) {
                console.error(`[PixPayment] ❌ Erro no polling:`, e)
            }
        }
        , 5e3);
        return () => {
            console.log(`[PixPayment] Parando polling`),
            clearInterval(n)
        }
    }
    , [l, t, f, d]),
    a ? (0,
    c.jsxs)(`div`, {
        className: `pix-payment-container`,
        children: [(0,
        c.jsxs)(`div`, {
            className: `pix-payment-header`,
            children: [(0,
            c.jsx)(`button`, {
                className: `pix-payment-back-btn`,
                onClick: () => t(-1),
                children: (0,
                c.jsx)(`svg`, {
                    width: `24`,
                    height: `24`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: (0,
                    c.jsx)(`polyline`, {
                        points: `15 18 9 12 15 6`
                    })
                })
            }), (0,
            c.jsx)(`h1`, {
                className: `pix-payment-title`,
                children: `Pagamento PIX`
            }), (0,
            c.jsx)(`div`, {
                style: {
                    width: 40
                }
            })]
        }), (0,
        c.jsxs)(`div`, {
            className: `pix-payment-security`,
            children: [(0,
            c.jsx)(`svg`, {
                width: `16`,
                height: `16`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `2`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                children: (0,
                c.jsx)(`path`, {
                    d: `M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`
                })
            }), `Pagamento seguro`]
        }), (0,
        c.jsxs)(`div`, {
            className: `pix-payment-content`,
            children: [(0,
            c.jsxs)(`div`, {
                className: `pix-payment-card`,
                children: [(0,
                c.jsx)(`h2`, {
                    className: `pix-payment-card-title`,
                    children: `Pague com PIX`
                }), (0,
                c.jsxs)(`div`, {
                    style: {
                        margin: `16px 0`
                    },
                    children: [(0,
                    c.jsx)(`h3`, {
                        className: `pix-payment-section-title`,
                        children: `Código PIX Copia e Cola`
                    }), (0,
                    c.jsx)(`div`, {
                        className: `pix-payment-code-container`,
                        children: (0,
                        c.jsx)(`div`, {
                            className: `pix-payment-code`,
                            children: a
                        })
                    }), (0,
                    c.jsx)(`button`, {
                        className: `pix-payment-copy-btn`,
                        onClick: async () => {
                            try {
                                await navigator.clipboard.writeText(a),
                                m(!0),
                                setTimeout( () => m(!1), 3e3)
                            } catch {
                                let e = document.createElement(`textarea`);
                                e.value = a,
                                e.style.position = `fixed`,
                                e.style.left = `-9999px`,
                                e.style.top = `0`,
                                document.body.appendChild(e),
                                e.focus(),
                                e.select(),
                                document.execCommand(`copy`),
                                document.body.removeChild(e),
                                m(!0),
                                setTimeout( () => m(!1), 3e3)
                            }
                        }
                        ,
                        children: p ? (0,
                        c.jsxs)(c.Fragment, {
                            children: [(0,
                            c.jsx)(`svg`, {
                                width: `20`,
                                height: `20`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: (0,
                                c.jsx)(`polyline`, {
                                    points: `20 6 9 17 4 12`
                                })
                            }), `Copiado!`]
                        }) : (0,
                        c.jsxs)(c.Fragment, {
                            children: [(0,
                            c.jsxs)(`svg`, {
                                width: `20`,
                                height: `20`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: [(0,
                                c.jsx)(`rect`, {
                                    x: `9`,
                                    y: `9`,
                                    width: `13`,
                                    height: `13`,
                                    rx: `2`,
                                    ry: `2`
                                }), (0,
                                c.jsx)(`path`, {
                                    d: `M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`
                                })]
                            }), `Copiar código PIX`]
                        })
                    })]
                })]
            }), (0,
            c.jsxs)(`div`, {
                className: `pix-payment-card`,
                children: [(0,
                c.jsx)(`h3`, {
                    className: `pix-payment-section-title`,
                    children: `Como pagar`
                }), (0,
                c.jsxs)(`div`, {
                    className: `pix-payment-step`,
                    children: [(0,
                    c.jsx)(`div`, {
                        className: `pix-payment-step-number`,
                        children: `1`
                    }), (0,
                    c.jsx)(`div`, {
                        className: `pix-payment-step-content`,
                        children: (0,
                        c.jsxs)(`div`, {
                            children: [(0,
                            c.jsx)(`h4`, {
                                className: `pix-payment-step-title`,
                                children: `Copie o código`
                            }), (0,
                            c.jsx)(`p`, {
                                className: `pix-payment-step-text`,
                                children: `Clique no botão acima para copiar o código PIX.`
                            })]
                        })
                    })]
                }), (0,
                c.jsxs)(`div`, {
                    className: `pix-payment-step`,
                    children: [(0,
                    c.jsx)(`div`, {
                        className: `pix-payment-step-number`,
                        children: `2`
                    }), (0,
                    c.jsx)(`div`, {
                        className: `pix-payment-step-content`,
                        children: (0,
                        c.jsxs)(`div`, {
                            children: [(0,
                            c.jsx)(`h4`, {
                                className: `pix-payment-step-title`,
                                children: `Abra o app do seu banco`
                            }), (0,
                            c.jsx)(`p`, {
                                className: `pix-payment-step-text`,
                                children: `Acesse a área PIX do aplicativo do seu banco ou instituição financeira.`
                            })]
                        })
                    })]
                }), (0,
                c.jsxs)(`div`, {
                    className: `pix-payment-step`,
                    children: [(0,
                    c.jsx)(`div`, {
                        className: `pix-payment-step-number`,
                        children: `3`
                    }), (0,
                    c.jsx)(`div`, {
                        className: `pix-payment-step-content`,
                        children: (0,
                        c.jsxs)(`div`, {
                            children: [(0,
                            c.jsx)(`h4`, {
                                className: `pix-payment-step-title`,
                                children: `Cole o código e pague`
                            }), (0,
                            c.jsx)(`p`, {
                                className: `pix-payment-step-text`,
                                children: `Selecione "PIX Copia e Cola", cole o código e confirme o pagamento.`
                            })]
                        })
                    })]
                })]
            })]
        }), (0,
        c.jsxs)(`div`, {
            className: `pix-payment-footer`,
            children: [(0,
            c.jsxs)(`div`, {
                className: `pix-payment-footer-info`,
                children: [(0,
                c.jsx)(`span`, {
                    className: `pix-payment-footer-label`,
                    children: `Total a pagar`
                }), (0,
                c.jsx)(`span`, {
                    className: `pix-payment-footer-total`,
                    children: r(d || 0)
                })]
            }), (0,
            c.jsxs)(`div`, {
                className: `pix-payment-footer-timer`,
                children: [(0,
                c.jsxs)(`svg`, {
                    width: `14`,
                    height: `14`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [(0,
                    c.jsx)(`circle`, {
                        cx: `12`,
                        cy: `12`,
                        r: `10`
                    }), (0,
                    c.jsx)(`polyline`, {
                        points: `12 6 12 12 16 14`
                    })]
                }), `Expira em: `, h]
            })]
        })]
    }) : null
}
export {l as default};
