import { Router } from 'express';
import bodyParser from 'body-parser';
import { dataEnv } from '../config/env.config.js';
import sgMail from '@sendgrid/mail' 

sgMail.setApiKey( dataEnv.parsed.SENDGRID_API_KEY)

/**
 * @openapi
 * '/api/email/send':
 *  post:
 *     tags:
 *     - email
 *     summary: send email
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - to
 *              - subject
 *              - text
 *            properties:
 *              to:
 *                type: string
 *                default: mario_panda11@outlook.com
 *              subject:
 *                type: string
 *                default: WELCOM
 *              text:
 *                type: string
 *                default: Hola mundo 
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */



const router = Router();

router.post('/send', async (req, res) =>{
    const {to, subject, text, html} = req.body
    const msg = {
        to,
        from: '211099@ids.upchiapas.edu.mx',
        subject,
        text,
        html
    }

    try {
        await sgMail.send(msg)
    } catch (err) {
        return res.status(err.code).send(err.message)
    }
})

export default router